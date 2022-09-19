import { InputFile, InputText } from 'elements/Form'
import React from 'react'
import { Fade } from 'react-reveal'

export default function Payment(props) {
  const { data, itemDetails, checkout, payments } = props

  const subTotal = itemDetails.price * checkout.duration
  const grandTotal = (subTotal * checkout.tax) / 100 + subTotal
  return (
		<Fade>
			<div className="container" style={{ marginBottom: 30 }}>
				<div className="row justify-content-center align-items-center">
					<div
						className="col-5 border-end py-5"
						style={{ paddingRight: 80 }}
					>
						<Fade delay={300}>
							<p className="mb-4">Transfer Pembayaran:</p>
							<p>Tax: {checkout.tax}%</p>
							<p>Sub total: ${subTotal} USD</p>
							<p>Total: ${grandTotal} USD</p>
							{payments &&
								payments.map((payment, index) => (
									<div
										key={`payment-${index}`}
										className={`row ${
											index === 0 ? 'mt-4' : ''
										}`}
									>
										<div className="col-3 text-right">
											<img
												src={payment.imageUrl}
												alt={payment.name}
												width="60"
											/>
										</div>
										<div className="col">
											<dl>
												<dd>{payment.name}</dd>
												<dd>{payment.accountNumber}</dd>
												<dd>{payment.accountHolder}</dd>
											</dl>
										</div>
									</div>
								))}
						</Fade>
					</div>
					<div className="col-5 py-5" style={{ paddingLeft: 80 }}>
						<Fade delay={600}>
							<label htmlFor="proofPayment">Upload Bukti Transfer</label>
							<InputFile
								id="proofPayment"
                name="proofPayment"
                accept="image/*"
								value={data.proofPayment}
								onChange={props.onChange}
							/>

							<label htmlFor="bankName">Asal Bank</label>
							<InputText
								id="bankName"
								name="bankName"
								type="text"
								value={data.bankName}
								onChange={props.onChange}
							/>

							<label htmlFor="bankHolder">Nama Pengirim</label>
							<InputText
								id="bankHolder"
								name="bankHolder"
								type="text"
								value={data.bankHolder}
								onChange={props.onChange}
							/>

						</Fade>
					</div>
				</div>
			</div>
		</Fade>
  );
}
