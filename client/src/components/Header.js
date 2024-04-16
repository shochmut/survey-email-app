import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>
            default:
                return <li><a href="/api/logout">Logout</a></li>;
        }
    }

    render() {
        return (
            <div>
                <nav>
                    <div class="nav-wrapper">
                        <a class="left brand-logo">Survey Email App</a>
                        <ul id="nav-mobile" class="right">
                            {this.renderContent()}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect()(Header);