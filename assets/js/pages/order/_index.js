document.addEventListener('DOMContentLoaded', () => {
    //Get public key and current locale
    let cardElt = document.getElementById('card-element');

    // Create a Stripe client.
    let stripe = Stripe(cardElt.dataset.public_key, {locale: cardElt.dataset.locale});

    // Create an instance of Elements.
    let elements = stripe.elements();

    // Custom styling can be passed to options when creating an Element.
    let style = {
        base: {
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
        },
        invalid: {
            color: 'red',
            iconColor: 'red'
        },
    };

    // Create an instance of the card Element.
    let card = elements.create('card', {style: style});

    // Add an instance of the card Element into the `card-element` <div>.
    card.mount('#card-element');

    // Handle real-time validation errors from the card Element.
    let displayError = document.getElementById('card-errors');
    card.addEventListener('change', function(event) {
        if (event.error) {
            displayError.textContent = event.error.message;
        } else {
            displayError.textContent = '';
        }
    });

    // Handle form submission.
    let form = document.getElementById('payment-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();


        stripe.confirmCardPayment(
            cardElt.dataset.intent_secret,
            {
                payment_method: {card: card}
            }
        ).then(function(response) {
            if (response.error) {
                // Inform the user if there was an error.
                let errorElement = document.getElementById('card-errors');
                errorElement.textContent = response.error.message;
            } else if (response.paymentIntent && response.paymentIntent.status === 'succeeded') {
                alert('success');
            }
        });
    });

    function stripeTokenHandler(token){
        let form = document.getElementById('payment-form');
        let hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', 'stripeToken');
        hiddenInput.setAttribute('value', token.id);
        form.appendChild(hiddenInput);

        form.submit();
    }
});