import { createStore } from 'vuex'
import {step} from "three/examples/jsm/nodes/ShaderNode";

export default createStore({
    state (){
        return {
            show: false,
            menu: [
                {icon: 'paid', title: 'Salary', value: 'salary', link: '/salary',src:'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
                {icon: 'schedule', title: 'Times GAP',value:'timesGAP', link: '/Gap&Unloading',src:'https://images.unsplash.com/photo-1508962914676-134849a727f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
                {icon: 'hdr_auto', title: 'Autocommit counter',value:'counter', link: '/autocommitCounter',src:'https://images.unsplash.com/photo-1508061538535-6effdf9eb6f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'},
                {icon: 'watch', title: 'Timestamp Calculator',value:'calculator', link: '/timestampCalculator',src: 'https://images.unsplash.com/photo-1502570149819-b2260483d302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
            ],
            titleToolBar: 'Home',
            changeVeawStyle: false,
            userPhoto: '',
            UID: '',
            user: '',
            tab: null,


            alert:{
                text: '',
                show: false,
                type: ''
            }

        }
    },
    mutations: {
        showAlert(state,[txt,type]){
            state.alert.text = txt
            state.alert.show = true
            state.alert.type = type
            setTimeout(()=>{state.alert.show = false},3000)
        }
    },

})