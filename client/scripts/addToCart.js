$('.minus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var $totalprice = $this.closest('div').find('lable'); // I have problem with this line
    var value = parseInt($input.val());

    if (value != 1) {
        value = value - 1;
    } else {
        value = 0;
    }

    $input.val(value);
    $totalprice.innerHTML = value * 2; // Testing if Total price works, It Does NOT

});

$('.plus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value != 100) {
        value = value + 1;
    } else {
        value = 100;
    }

    $input.val(value);
});