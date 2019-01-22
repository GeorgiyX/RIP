import React from 'react';
import { hot } from 'react-hot-loader';
import img from "../img/img.png";
import '../css/style.css';
import ListItem from "./ListItem";
import axios from 'axios';

// export default () => (
//     <h1>
//         hi2
//     </h1>
// );
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            txt: "====",
            repos: []
        };
        this.onButtonClick = this.onButtonClick.bind(this);        
    }
    componentWillMount(){
        this.setState({
            isLoading: true
        });
        axios.get("https://api.github.com/users/iu5team/repos").then(
            response => {
                this.setState({
                
                repos: response.data,
                isLoading: false
            })
            console.log(response.data);
        },
        error =>{
            this.setState({
                isLoading: false
            })
        }
    );

}
    onButtonClick(){
        this.setState({txt: "1212"})
    }
    render(){
        const { repos} = this.state
        return(
            
        // <div className="simple">
        // {
        //     ['1','2','3'].map(iu => <ListItem>{iu}</ListItem>)
        // }
        
        
            repos.map((elem)=>{return(<ListItem><a  href={elem.html_url} key={elem.id}>{elem.name}</a></ListItem>)}))
        
        //{/* {this.state.isLoading && <div>Loading!</div>}
        // {
        //     this.state.repos.map((repo, i) => <ListItem key= { i }> {repo.name} </ListItem>)
        // } */}
        //     <h1 >Hi,2nd try!{this.state.txt}</h1>
        //     <div onClick={this.onButtonClick}>button</div>
        //     <img src={img}/>
        // </div>);
    }
}
// const App = () => <h1>hi</h1>
export default hot(module)(App);