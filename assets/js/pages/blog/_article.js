import ajax from "../../functions/_ajax";

document.addEventListener('DOMContentLoaded', () => {
    let newCommentContent = document.getElementById('new-comment-content');
    newCommentContent.addEventListener('paste', (e) => {
        e.preventDefault();
        let text = (e.originalEvent || e).clipboardData.getData('text/plain');
        text = text.replace(/\r\n/g, '\r').replace(/[\r\n]/g, '<br>');
        document.execCommand('insertHTML', false, text);
    });
    let newCommentValidate = document.getElementById('new-comment-validate');
    newCommentValidate.addEventListener('click', () => {
        let spinner = '<i class="fas fa-spinner"></i>';
        let validateButtonText = newCommentValidate.innerHTML;
        newCommentValidate.innerHTML = spinner;
        newCommentValidate.blur();
        if (newCommentContent.innerText.length === 0) {
            return;
        }
        let content = newCommentContent.innerHTML;
        let url = newCommentValidate.getAttribute('data-target-url');
        ajax(
            url,
            (response) => {
                if (response.success) {
                    let comment = createComment({
                        date: response.date,
                        username: response.username,
                        content: response.content,
                        deleteUrl: response.deleteUrl
                    });
                    let newComment = document.querySelector('.blog-article__comment--new');
                    let nextElementSibling = newComment.nextElementSibling;
                    if (nextElementSibling instanceof HTMLElement) {
                        nextElementSibling.parentNode.insertBefore(comment,nextElementSibling);
                    } else {
                        newComment.parentNode.appendChild(comment);
                    }
                    newCommentContent.innerHTML = '';
                }
                newCommentValidate.innerHTML = validateButtonText;
            },
            {
                method: 'POST',
                datas: {
                    'content': content
                }
            }
        );
    });
    let deleteButtons = document.querySelectorAll('.blog-comment-delete');
    for (let deleteButton of deleteButtons) {
        deleteButton.addEventListener('click', deleteComment);
    }
});

/**
 *
 * @param {Object} commentDatas
 * @param {string} commentDatas.date
 * @param {string} commentDatas.username
 * @param {string} commentDatas.content
 * @param {string} commentDatas.deleteUrl
 */
function createComment(commentDatas) {
    let comment = document.createElement('div');
    comment.classList.add('blog-article__comment');
    comment.classList.add('blog-article__comment--right');
    let header = document.createElement('div');
    header.classList.add('blog-article__comment__header');
    let date = document.createElement('span');
    date.classList.add('blog-article__comment__header__date');
    date.innerText = commentDatas.date;
    header.appendChild(date);
    let sep = document.createTextNode(' - ');
    header.appendChild(sep);
    let username = document.createElement('span');
    username.classList.add('blog-article__comment__header__username');
    username.innerText = commentDatas.username;
    header.appendChild(username);
    comment.appendChild(header);
    let content = document.createElement('div');
    content.classList.add('blog-article__comment__content');
    let deleteButton = document.createElement('span');
    deleteButton.classList.add('blog-comment-delete');
    deleteButton.setAttribute('data-target-url', commentDatas.deleteUrl);
    let deleteIcon = document.createElement('i');
    deleteIcon.classList.add('far');
    deleteIcon.classList.add('fa-window-close');
    deleteButton.appendChild(deleteIcon);
    deleteButton.addEventListener('click', deleteComment);
    content.innerHTML = ' ' + commentDatas.content;
    content.prepend(deleteButton);
    comment.appendChild(content);
    return comment;
}

function deleteComment() {
    if (!confirm('Supprimer?')) {
        return;
    }
    let spinner = '<i class="fas fa-spinner"></i>';
    let deleteButton = this;
    let deleteIcon = deleteButton.innerHTML;
    deleteButton.innerHTML = spinner;
    ajax(
        deleteButton.dataset.targetUrl,
        (response) => {
            if (response.success) {
                let message = this;
                while (!message.classList.contains('blog-article__comment')) {
                    message = message.parentNode;
                }
                message.parentNode.removeChild(message);
            }
            deleteButton.innerHTML = deleteIcon;
        },
        {
            method: 'DELETE'
        }
    );
}