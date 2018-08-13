import React from 'react';
import './pagination.scss';

const Pagination = ({current, total, onClick}) => {
	const PER_PAGE = 30;
	const getArray = (c, m) => {
		let current = c,
			last = m,
			delta = 2,
			left = current - delta,
			right = current + delta + 1,
			range = [],
			rangeWithDots = [],
			l;

		for (let i = 1; i <= last; i++) {
			if (i === 1 || i === last || i >= left && i < right) {
				range.push(i);
			}
		}

		for (let i of range) {
			if (l) {
				if (i - l === 2) {
					rangeWithDots.push(l + 1);
				} else if (i - l !== 1) {
					rangeWithDots.push('...');
				}
			}
			rangeWithDots.push(i);
			l = i;
		}

		return rangeWithDots;
	};
	return (
		<div className="pagination">
			{getArray(current, Math.ceil(total / PER_PAGE)).map((item, key) =>
				<div
					key={key}
					onClick={item !== "..." ? onClick(item) : () => {}}
					className={`page ${item === "..." ? 'dot' : ''} ${item === current ? 'active' : ''}`}>
					{item}
				</div>
			)}
		</div>
	);
};

export default Pagination;