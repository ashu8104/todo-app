import React from 'react';
import Todo from"./Todo";
import Doing from "./Doing";
import Done from "./Done";
import InputForm from "./InputForm";


export default class Dashboard extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
     	flag:false,
     	name: '',
     	assignee: '',
     	deadline: '',
     	title: '',
     	status: '',
     	to_do :'',
     	to_do_info_hash:[],
     	doing_info_hash:[],
     	done_info_hash:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputForm = this.handleInputForm.bind(this);
    this.handleCancelButton = this.handleCancelButton.bind(this);
    this.saveFormData = this.saveFormData.bind(this);

  }
  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
    

  }
  handleInputForm(){
  	this.setState({flag:true});
  }
  handleCancelButton(){
  	this.setState({flag:false});
  }
  
  componentDidMount(){
  	let to_do = JSON.parse(localStorage.getItem('to_do'));
  	if(to_do){
  		this.setState({to_do_info_hash:to_do});
  	}
  	let doing = JSON.parse(localStorage.getItem('doing'));
  	if(doing){
  		this.setState({doing_info_hash:doing});
  	}
  	let done = JSON.parse(localStorage.getItem('done'));
  	if(done){
  		this.setState({done_info_hash:done});
  	}
  }
  saveFormData(){
  	var title = this.state.title;
  	var name = this.state.name;
  	var assignee = this.state.assignee;
  	var deadline = this.state.deadline;
  	var status = this.state.status;
	if (status === "to-do"){

	let info_hash = {title:title, name:name, assignee:assignee,deadline:deadline};
	
    let to_do = JSON.parse(localStorage.getItem('to_do'));
    if(!to_do){
      to_do = [];
    }
    to_do.push(info_hash);
    this.setState({to_do_info_hash:to_do});
    localStorage.setItem('to_do', JSON.stringify(to_do));
	}
	else if(status ==="doing"){
	
		let info_hash = {title:title, name:name, assignee:assignee,deadline:deadline};
		this.setState({doing_info_hash:info_hash});
	    let doing = JSON.parse(localStorage.getItem('doing'));
	    if(!doing)
	    {
	      doing = [];
	    }
    	doing.push(info_hash);
    	this.setState({doing_info_hash:doing});
    	localStorage.setItem('doing', JSON.stringify(doing));
	}
	else if(status === "done"){

		let info_hash = {title:title, name:name, assignee:assignee,deadline:deadline};
		this.setState({done_info_hash:info_hash});
	    let done = JSON.parse(localStorage.getItem('done'));
	    if(!done)
	    {
	      done = [];
	    }
    	done.push(info_hash);
    	this.setState({done_info_hash:done});
    	localStorage.setItem('done', JSON.stringify(done));
		
	}
	else{
		return 1;
	}
	this.setState({flag:false});
  }

	render(){
		console.log("to_do_info_hash ", this.state.to_do_info_hash)
		return(
			<div>
			<div className ="app-title"> Welcome to Todo Demo Application </div>
				<div className ="home-page-layout">
					<Todo handleInputForm ={this.handleInputForm} info_hash ={this.state.to_do_info_hash} />
					<Doing handleInputForm ={this.handleInputForm} info_hash ={this.state.doing_info_hash}/>
					<Done handleInputForm ={this.handleInputForm} info_hash ={this.state.done_info_hash}/>
				</div>
				<InputForm saveFormData={this.saveFormData} flag={this.state.flag} handleChange ={this.handleChange} handleCancelButton={this.handleCancelButton}/>
			</div>
			);

	}
}