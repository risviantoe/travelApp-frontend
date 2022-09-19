import { InputText } from 'elements/Form'
import React from 'react'
import { Fade } from 'react-reveal'

export default function BookingInformation(props) {
  const { data, itemDetails, checkout } = props
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-end py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <div className="card">
                <figure className="img-wrapper mb-3" style={{ height: 270 }}>
                  <img src={itemDetails.imageUrls[0].url} alt={itemDetails.name} className="img-cover" />
                </figure>
                <div className="row align-items-center">
                  <div className="col">
                    <div className="meta-wrapper" style={{ margin: 0 }}>
                      <h5>{itemDetails.name}</h5>
                      <span className="text-gray-500">
                        {itemDetails.city}, {itemDetails.country}
                      </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>
                      ${+checkout.duration * itemDetails.price} USD
                      <span className="text-gray-500"> per </span>
                      {checkout.duration} {itemDetails.unit}
                      {+checkout.duration > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="firstName">First Name</label>
              <InputText
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={props.onChange}
              />

              <label htmlFor="lastName">Last Name</label>
              <InputText
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={props.onChange}
              />

              <label htmlFor="email">Email Address</label>
              <InputText
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={props.onChange}
              />

              <label htmlFor="phone">Phone Number</label>
              <InputText
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  )
}
