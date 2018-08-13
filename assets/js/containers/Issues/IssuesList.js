import React, {Fragment} from 'react';
import timeago from 'timeago.js';

const timeAgo = (created) => {
	const timeDiff = Math.abs(new Date().getTime() - new Date(created).getTime());
	return timeago().format(Date.now() - timeDiff)
};

const IssuesList = ({issues}) => (
	<Fragment>
		{issues && (
			<div className="list">
				{issues.map((issue, key) =>
					<div key={key} className="item">
						<div className="item-icon"/>
						<div className="item-info">
							<div className="item-comments">
								{issue.comments}
							</div>
							<div className="title">
								{issue.title} {issue.labels.map((item, k) =>
								<span key={k} style={{backgroundColor: '#' + item.color}}>{item.name}</span>
							)}
							</div>
							<div className="description">
								#{issue.number} opened {timeAgo(issue.created_at)} hours ago
								by <span>{issue.user.login}</span>
							</div>
						</div>
					</div>
				)}
			</div>
		)}
	</Fragment>
);

export default IssuesList;