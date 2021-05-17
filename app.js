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
    },
    computed: {
        doubleCount() {
            return this.notes.length * 2 
        }
    },
    //отслеживание, имя метода должно совпадать с именем отслеживаемой переменой
    watch: {
        inputValue(value) {
            if(value.length > 10){
                this.inputValue = ""
            }
        }
    }
}

Vue.createApp(App).mount('#app') // подключение(моунтить) Vue к участку html c id="app"

//computed он привязывается к переменой и отслеживает только ее изменения. Первое правило, они дожны что то возращять. причем возращять уже обьявленый обьект
//