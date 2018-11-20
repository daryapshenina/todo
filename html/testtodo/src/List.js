/**
 * Created by root on 13/07/18.
 */
/*
* Уже не помню, зачем мне этот компонент
* */

/**
 * Created by root on 11/07/18.
 */
import React, { Component } from 'react';

class List extends Component {
    constructor(){
        super();
        this.state = {name:'Dara',surname:'S',age:25,hello:false,show:true,
            list:[1, 2, 3, 4, 5],
            value:''
        };
        this.changeName=this.changeName.bind(this);
        this.changeBye=this.changeBye.bind(this);
        this.addItem=this.addItem.bind(this);
    }

    render() {

        const list = this.state.list.map((item, index) => {
                return <li key={index}>
            {item}
            <button onClick={this.deleteItem.bind(this, index)}>
        удалить
        </button>
        </li>;
    });


         let result
       if (this.state.show){
            result =   <div>
            <p>имя: {this.state.name}</p>
            <p>возраст: {this.state.age}</p>
            <button onClick={this.changeName}>изменить</button>
            <button onClick={this.changeBye}>{this.state.hello ? 'привет' : 'пока'}</button>
            <ul>{list}</ul>
            </div>
        }
        return (
            <div>555</div>
          /*  <div>
            <div>{result}</div>
            <button onClick = {this.addItem}>добавить</button>
        <form onSubmit={this.addSubmit.bind(this)}>
    <input value={this.state.value} onChange={this.insertValue.bind(this)} />
    <input type="submit" value='Отправить'  />
            </form>

            <textarea value={this.state.value} onChange={this.insertValue.bind(this)} />
    <input type="checkbox"/>
            <button onClick={this.changeBye}>{this.state.show ? 'скрыть' : 'отобразить'}</button>
        <p>{this.state.value.toUpperCase()}</p>
        </div>*/

    )



    }
    addSubmit(event){
        console.log(this.state.value); //выводим данные на экран
        this.addItem(this.state.value);
        event.preventDefault();
    }

    insertValue(event){
        console.log(event.target.value);
        this.setState({
            value: event.target.value
        })
    }

    getText() {
        let text ;
        let lii ;
        const showText = true;
        const array = [1,2,3,4,5];
        // const atr = 'block';
        const style = {
            fontSize:'15px',
            border:'2px solid black',
            color:'black'
        }

        if (showText) {
            text = <div style = {style}>текст1</div>;
        } else {
            lii = array.map(function (item, index) {
                return <li key = {index}>{item}</li>

            })
            text = <ul>{lii}</ul>

        }
        return text
    }



    getSum(a, b) {
        return (
            a + b
        );
    }

    changeName() {
        this.setState({
            name: 'New',
            age:30
        })
    }
    changeBye(){
        this.setState({
            show: !this.state.show,
        })
    }

    addItem(value){
        this.state.list.push(value);
        this.setState({
            list:this.state.list
        });
    }
    deleteItem(num){
        this.state.list.splice(num, 1);
        this.setState({
            list:this.state.list
        });
    }



}

export default List;