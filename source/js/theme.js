( function(){
  var matches, toggle_class

  matches = (function(){
    var m = document.body.webkitMatchesSelector || document.body.mozMatchesSelector || document.body.oMatchesSelector || document.body.msMatchesSelector || document.body.matchesSelector
    return function ( elem, sel ) {
      m.call( elem, sel )
    };
  })()

  toggle_class = function ( elem, klass ) {
    elem.classList.contains( klass ) ? elem.classList.remove( klass ) : elem.classList.add( klass )
  }

  document.addEventListener( 'click', function ( e ) {
    var elem = e.target

    if ( matches( elem, '.toggle-menu' ) ) {
      ( function(){
        if ( matches( this, '.header-menu' ) ) {
          toggle_class( this, 'on' )
        } else {
          arguments.callee.call( null, this.parentElement )
        }
      } ).call( elem.parentElement )
      return;
    }

    if ( matches( elem, '.search' ) ) {
      toggle_class( elem, 'on' )
      elem.querySelector( '.search-field' ).focus()
      return;
    }
  }, false )
} )();
