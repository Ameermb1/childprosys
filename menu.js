<script>
function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
  }
  
  function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
  }
  </script>






















var SPY = function() {
    function e(a, d, b) {
      var c, f, g, h;
      b == a.length ? k.animationComplete = !0 : (g = d.innerHTML, h = Math.floor(21 * Math.random() + 5), c = 32 == a[b] ? 32 : a[b] - h, f = setInterval(function() {
        d.innerHTML = g + String.fromCharCode(c);
        c == a[b] ? (clearInterval(f), c = 32, b++, setTimeout(function() {
          e(a, d, b);
        }, 10)) : c++;
      }, 5));
    }
    var k = {};
    return k = {animationComplete:!1, text:function(a) {
      this.animationComplete = !1;
      a = document.getElementById(a);
      for (var d = a.innerHTML, b = [], c = 0;c < d.length;c++) {
        b.push(d.charCodeAt(c));
      }
      a.innerHTML = "";
      e(b, a, 0);
    }};
  }();
  
  
  $( 'document' ).ready(function() {
    
    // Hide header
    $( '.header' ).hide();
    // Transition background
    $( '.london' ).fadeIn( 1200 );
    
    
    // Timeout for crypto text
    setTimeout( function() { 
      $( '.header' ).fadeIn( 'slow' );
        SPY.text( 'op' );
    }, 1000);
    
  });






