import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

class HomeLayout extends Component {

    state = {
    }

    componentDidMount = () => {
        if (window.location.hostname !== 'localhost') {
            ReactGA.set({ page: window.location.href });
            ReactGA.pageview(window.location.href);
        }
    }

    GotoPosts = () => {
        this.props.history.push('/articles');
    }

    render() {

        const headerStyle = {
            h1Small: {
                marginRight: '115px', fontSize: '1rem'
            },
            h1Large: {
                marginRight: '115px', fontSize: '2rem'
            },
            h2Small: {
                fontSize: '0.9rem'
            },
            h2Large: {
                fontSize: '1.7rem'
            },
            h3Small: {
                fontSize: '0.8rem'
            },
            h3Large: {
                fontSize: '1.5rem'
            }
        }
        return (
            <div style={{ height: window.innerHeight - 120, textAlign: 'center' }}>

                <h1 style={window.innerWidth > 600 ? headerStyle.h1Large : headerStyle.h1Small} className="sentence">Hi, I'm Mushfiqur Rahman. I am a
                    <div className="fadeIn">
                        <span>software developer.</span>
                        <span>photographer.</span>
                        <span>freelancer.</span>
                        <span>tech geek.</span>
                        <span>music enthusiast.</span>
                    </div>
                </h1>

                <h2 style={window.innerWidth > 600 ? headerStyle.h2Large : headerStyle.h2Small}>I write code in javascript.</h2>
                <h3 style={window.innerWidth > 600 ? headerStyle.h3Large : headerStyle.h3Small}>This is my blog and it's still being developed.</h3>
                <Link to='/articles'>
                    <Label className='pulse' color={this.props.accent}>
                        See my articles
                    </Label>
                </Link>
                <div style={{ minHeight: '50vh' }}>

                </div>

            </div >

        );
    }
}
function mapStateToProps(state) {
    return {
        editorText: state.articleStore.editorText
    }
}
export default connect(mapStateToProps, {})(HomeLayout);
