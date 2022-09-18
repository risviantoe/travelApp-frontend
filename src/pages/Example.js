import React, { useState } from 'react'
import Breadcrumb from 'elements/Breadcrumb';
import InputText from 'elements/Form/InputText';
import InputFile from 'elements/Form/InputFile';

export default function Example() {
	const [value, setValue] = useState('')

	const handleChange = (e) => {
    setValue(e.target.value)
	}
	

  return (
		<div className="container">
			<div
				className="row align-items-center justify-content-center"
				style={{ height: '100vh' }}
			>
				<div className="col-auto">
					{/* <InputText
						type='email'
						name='testing'
						value={value}
						onChange={(e) => handleChange(e)}
					/> */}
				</div>
				<div className="col-auto">
					<InputFile
						name='testing'
						value={value}
						onChange={(e) => handleChange(e)}
					/>
				</div>
			</div>
		</div>
  );
}
