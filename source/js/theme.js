(function($) {
  if (!$) return;
  $( document )
  .on( 'click', '.toggle-menu', function(e) {
    e.stopPropagation()
    $( this ).closest( '.header-menu' ).toggleClass( 'on' )
  })
  .on( 'click', '.search', function(e) {
    e.stopPropagation()
    $( this ).toggleClass( 'on' ).find( '.search-field' ).focus()
  })
  .on( 'click', '.search-field', function(e) {
    e.stopPropagation()
  })
  .on( 'click', function() {
    $( '#header .on' ).removeClass( 'on' )
  })
})(jQuery);
