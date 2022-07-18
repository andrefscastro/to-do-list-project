
const Main = {

    init: function() {
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function() {
        this.$checkButtons = document.querySelectorAll('.check')
    },

    bindEvents: function() {
        const self = this
        
        this.$checkButtons.forEach(function(button){
            button.onclick = self.Events.checkButton_click
        })
    },


    Events: {
        checkButton_click: function(e) {
            const li = e.target.parentElement

            const $check = document.querySelectorAll('.check')

            const isDone = li.classList.contains('done')

            if (!isDone) {
                li.classList.add('done')

                return
            }

            li.classList.remove('done')
            
        }
    }

}

Main.init()