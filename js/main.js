
const Main = {

    init: function() {
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function() {
        this.checkButtons = document.querySelectorAll('.check')
    },

    bindEvents: function() {
        this.checkButtons.forEach(function(button){
            button.onclick = function(){
                alert('ok')
            }
        })
    }

}

Main.init()