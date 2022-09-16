import React from 'react'
import Breadcrumb from 'elements/Breadcrumb';

export default function Example() {
 const breadcrumbList = [
		{ pageTitle: 'Home', pageHref: '' },
		{ pageTitle: 'House Details', pageHref: '' },
		{ pageTitle: 'Room', pageHref: '' },
 ];

  return (
		<div className="container">
			<div
				className="row align-items-center justify-content-center"
				style={{ height: '100vh' }}
			>
				<div className="col-auto">
					<Breadcrumb data={breadcrumbList} />
				</div>
			</div>
		</div>
  );
}
