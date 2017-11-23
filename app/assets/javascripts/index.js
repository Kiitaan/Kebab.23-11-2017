function main() {
  $('.container').hide();
  $('.container').fadeIn(1000);

  $('.resto').hide();

  $('.button').on('click', function() {
    $(this).next().show();
	});
}

$(document).ready(main);
