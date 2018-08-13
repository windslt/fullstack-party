import React, {Component} from 'react';
import './Issues.scss';
import {connect} from "react-redux";
import {LOAD_ISSUES, LOAD_ISSUES_COUNT} from "../../reducers/actionTypes";
import agent from "../../agent";
import Header from "../../components/header/header";
import IssuesList from "./IssuesList";
import Pagination from "../../components/pagination/pagination";

class Issues extends Component {
	constructor(props) {
		super(props);

		this.state = {
			issuesState: 'open',
			currentPage: 1
		};
	}

	handleClick = state => e => {
		e.preventDefault();
		this.props.loadIssues(state);
		this.setState({currentPage: 1});
		this.setState({issuesState: state});
	};

	handlePageClick = page => e => {
		e.preventDefault();
		console.log('page', page);
		this.props.loadIssues(this.state.issuesState, page);
		this.setState({currentPage: page});
	};

	componentDidMount() {
		this.props.loadIssues(this.state.issuesState);
		this.props.loadIssuesCount();
	}

	render() {
		const {issues, counts} = this.props;
		return (
			<div className="Issues">
				<Header/>
				<div className="row">
					<div className="col-2 list-block">
						<div className="status">
							<span
								onClick={this.handleClick('open')}
								className={`open ${this.state.issuesState === 'open' && 'active'}`}>
								{counts && counts.open} Open
							</span>
							<span
								onClick={this.handleClick('closed')}
								className={`closed ${this.state.issuesState === 'closed' && 'active'}`}>
								{counts && counts.closed} Closed
							</span>
						</div>
						<IssuesList issues={issues}/>
						{counts &&
						<Pagination
							onClick={this.handlePageClick}
							current={this.state.currentPage}
							total={this.state.issuesState === 'open' ? counts.open : counts.closed}/>
						}
					</div>
					<div className="col-2 cover-block">
						<div className="text-block">
							<div className="title">
								Full Stack Developer Task
							</div>
							<div className="description">
								by <span className="logo"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	issues: state.issues.items,
	counts: state.issues.counts
});

const mapDispatchToProps = dispatch => ({
	loadIssues: (state, page = 1) =>
		dispatch({type: LOAD_ISSUES, payload: agent.Issues.get({state, page})}),
	loadIssuesCount: () =>
		dispatch({type: LOAD_ISSUES_COUNT, payload: agent.Issues.getCount()}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Issues);
