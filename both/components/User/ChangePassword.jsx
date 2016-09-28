ChangePassword = React.createClass({
    onSubmit(e) {
        e.preventDefault();
        // this.refs will collect all refs in component
        // console.log(this.refs); // this logs a constructor

        // console.log(this.refs.oldPassword.getDOMNode().value); // old way
        // console.log(this.refs.oldPassword.value);

        var oldPassword = this.refs.oldPassword.getDOMNode().value;
        var newPassword = this.refs.newPassword.getDOMNode().value;
        var confirmPassword = this.refs.confirmPassword.getDOMNode().value;

        if(newPassword === confirmPassword) {
            Accounts.changePassword(oldPassword, newPassword, (er)=> {
                if(er) {
                    Materialize.toast(er.reason, 4000);
                } else {
                    Materialize.toast("You changed your password", 4000);
                    FlowRouter.go('/');
                }
            });
        }

    },

    render() {
        return (
            <div className="row">
				<h4 className="text-center">Change Password</h4>
				<form onSubmit={this.onSubmit} className="col offset-s4 s4">
					<div className="row">
						<div className="input-field col s12">
							<input id="oldPassword" ref="oldPassword" type="text" className="validate" />
							<label htmlFor="email">Old Password</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="newPassword" ref="newPassword" type="password" className="validate" />
							<label htmlFor="password">New Password</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="confirmPassword" ref="confirmPassword" type="password" className="validate" />
							<label htmlFor="confirmPassword">Confirm Password</label>
						</div>
					</div>
					<div className="row">
						<button className="waves-effect waves-light btn btn-block">Submit</button>
					</div>
				</form>
			</div>

        );
    }
});
