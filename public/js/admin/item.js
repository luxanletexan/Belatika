class FileFormManager {

    /**
     * @param {Object} options
     * @param {string} options.containerId
     * @param {string} options.prototypeId
     */
    constructor(options = {}){
        this.$container = options.containerId === undefined ? $('#filesBox') : $('#'+options.containerId);
        this.$prototype = options.containerId === undefined ? $('#filesProto') : $('#'+options.prototypeId);
        this.protoWidget = this.$prototype.attr('data-prototype');
        this.nofile = this.$prototype.attr('data-nofile-src');
    }

    getFileCount(){
        return $('.image-thumb').length;
    }

    createAddFile(){
        // create new elements
        let fileCount = this.getFileCount();
        let newWidget = $(this.protoWidget.replace(/__name__/g, fileCount));
        let newButton = $(
            '<div class="image-thumb" id="jsPreview'+fileCount+'">' +
                '<button id="jsBtnUpload'+fileCount+'" class="btn btn-belatika-dark image-add">' +
                    '<i class="fas fa-plus"></i> Image' +
                '</button>' +
                '<img id="image-preview-'+fileCount+'" src="'+this.nofile+'" alt="Rajouter une image">' +
            '</div>'
        );
        this.$container.append(newWidget);
        this.$container.append(newButton);

        // reset events
        for (let i = 0; i < fileCount; i++) {
            $('#item_images_'+i).unbind();
        }

        // set events on new elements
        newWidget.on('change', () => {
            this.createAddFile();
        });
        newButton.on('click', (e) => {
            $('#item_images_' + fileCount + '_file').click();
            e.preventDefault();
        });
        $('#item_images_'+fileCount+'_file').on('change', () => {
            let width = $('#jsPreview'+fileCount).width();
            let input = document.getElementById('item_images_'+fileCount+'_file');
            if (input.files && input.files[0]) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    $('#image-preview-'+fileCount)
                        .attr('src', e.target.result)
                        .width(width)
                        .css('border', '2px solid black');
                };
                reader.readAsDataURL(input.files[0]);
            }
        });
    };
}

$(document).ready(function(){
    let fileFormManager = new FileFormManager();
    fileFormManager.createAddFile();
});
