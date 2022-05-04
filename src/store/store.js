import { createStore } from 'vuex'

export default createStore({
    state (){
        return {
            show: false,
            menu: [
                {icon: 'paid', title: 'Salary', value: 'salary', link: '/salary',src:'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
                {icon: 'schedule', title: 'Times GAP',value:'timesGAP', link: '/Gap&Unloading',src:'https://images.unsplash.com/photo-1508962914676-134849a727f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
               // {icon: 'watch', title: 'Times',value:'time', link: '/times',src:'https://images.unsplash.com/photo-1502570149819-b2260483d302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},

            ],
            titleToolBar: 'Home',
        }
    },

    mutations: {

    }
})