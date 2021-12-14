// variables


// element references (DOM elements)
const $button = $('button');
const $ol = $('ol');
const $input = $('input');

// event listeners
$button.on('click', handleClick)
$ol.on('click', '.delete-btn', handleDelete)

// functions

function handleClick(){
    $ol.append($(`<li><button class="delete-btn">X</button> ${$input.val()}</li>`))
    $input.val('')
}

function handleDelete(){
    $(this).closest('li').remove()
}
