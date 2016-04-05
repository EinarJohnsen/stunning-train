
var SomeComponent = React.createClass({

	render: function(){
		return(
			<h3>{this.props.header}</h3>
			);
		}
	});

	React.render( <SomeComponent header="Dette er en tittel :)"/>, document.getElementById('content'));

var EinarsComponent = React.createClass({
	getInitialState: function(){
 		return {
    			post: ''
  		};
	},
	componentDidMount: function(){
		var x = Math.floor((Math.random() * 9000) + 999);
		var y = x.toString();
		$.ajax({
			url: "https://api.bring.com/shippingguide/api/postalCode.html",
			data: {clientUrl: "localhost", pnr: y },
			success: function(data){
				var s = $(data).html();
				this.setState({post: s});
			}.bind(this)	
		});
	},

	render: function(){
		return(			
			<li><input className="mdl-checkbox__input" type="checkbox"></input>{this.state.post}</li>
		);
	}
});

React.render(<ul>
		<EinarsComponent />
		<EinarsComponent />
		<EinarsComponent />
		<EinarsComponent />
		<EinarsComponent />
		 </ul>
		, document.getElementById('hei'));
	
