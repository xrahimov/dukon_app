import React, { useState } from 'react';
import { Typography, Form, Input } from 'antd';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';
import { ButtonContainer } from '../StyledComponents/Button';

const { Title } = Typography;
const { TextArea } = Input;

const Categories = [
    { key: 1, value: "Smartphone" },
    { key: 2, value: "Headphones" },
    { key: 3, value: "Video Game" },
    { key: 4, value: "Charger" },
    { key: 5, value: "USB Flash" }
]

export default function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [CompanyValue, setCompanyValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [CategoryValue, setCategoryValue] = useState(1)
    const [Images, setImages] = useState([])

  const [Payments, setPayments] = useState([])
  Axios.post('/api/payment/getPayments')
    .then(response=>{
      if (response.data.success) {
        setPayments(response.data.payments)
      } else {
        alert('Failed to fetch payment data')
      }
    }) 


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onCompanyChange = (event) => {
        setCompanyValue(event.currentTarget.value)
    }
  
    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onCategorySelectChange = (event) => {
        setCategoryValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();


        if (!TitleValue || !CompanyValue || !DescriptionValue || !PriceValue ||
            !CategoryValue || !Images) {
            return alert('Fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            company: CompanyValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            categories: CategoryValue,
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Successfully Uploaded')
                    props.history.push('/product/upload')
                } else {
                    alert('Failed to Upload')
                }
            })

    }

  return (
      <React.Fragment>
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Upload Product</Title>
            </div>


            <Form onSubmit={onSubmit} >

                {/* DropZone */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>Title</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Company</label>
                <Input
                    onChange={onCompanyChange}
                    value={CompanyValue}
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label>Price($)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br /><br />
                <select onChange={onCategorySelectChange}>
                    {Categories.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br />
                <br />

                <ButtonContainer
                    onClick={onSubmit}
                >
                    Submit
                </ButtonContainer>

            </Form>
      </div>
      <div style={{ width: '100%', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>History</h1>
      </div>
      <br />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>PhoneNumber</th>
            <th>Address</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Payment</th>
            <th>Date of Purchase</th>
          </tr>
        </thead>

        <tbody> 
          {Payments.map((payment, index) => (
            <tr>
              
                <React.Fragment>
                  <td>{payment.user.name}</td>
                  <td>{payment.user.email}</td>
                  <td>{payment.user.phoneNumber}</td>
                  <td>{payment.user.address}</td>
                </React.Fragment>
              
              {
                payment.product.length > 1 ?
                  payment.product.map(item => (
                    <React.Fragment>
                      <tr>
                        <td>{item.name}</td>  
                        <td>{item.quantity}</td>
                        <td>${item.amountToPay}</td>
                        <td>{item.dateOfPurchase}</td>
                      </tr>
                    </React.Fragment>
                  ))
                  :
                  payment.product.map(item => (
                  <React.Fragment>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>${item.amountToPay}</td>
                    <td>{item.dateOfPurchase}</td>
                  </React.Fragment>
                ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div> 
    </React.Fragment>
    )
}