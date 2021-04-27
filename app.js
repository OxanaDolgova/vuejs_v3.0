const App = {
    data () { //метод для передачи данных из js в html
        return {
            title: 'Note list',
            placeholderName: 'Enter note name',
            inputValue: '',
            notes: ['note 1', 'note 2', 'note 3']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if(this.inputValue)
            { 
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        /*inputKeyPress(event) {
            if(event.key === 'Enter'){
                this.addNewNote()
            }
        }*/
        removeNote(idx){
            this.notes.splice(idx,1)
        },
        toUpperCase (item) {
            return item.toUpperCase()
        }
    }
}

Vue.createApp(App).mount('#app') // подключение(моунтить) Vue к участку html c id="app"