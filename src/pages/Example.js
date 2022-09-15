import React, { useState } from 'react'
import { InputDate } from '../elements/Form'

export default function Example() {
  const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date(),
		key: 'selection',
  });

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
		<div className="container">
			<div
				className="row align-items-center justify-content-center"
				style={{ height: '100vh' }}
			>
				<div className="col-auto">
					<InputDate
						max={30}
						onChange={handleChange}
						name="value"
						value={value}
					/>
				</div>
			</div>
		</div>
  );
}
