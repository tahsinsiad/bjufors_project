import React from 'react'
import Head from "next/head";
import { Divider, Form, Input, Button } from 'antd'

const { TextArea } = Input;

const ContactForm = (props) => {
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    const { getFieldDecorator } = props.form;

    return (

        <div>
            <Head>
                <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
            </Head>
            <div className="contact-page-container" style={{ margin: "0 350px" }}>
                <div>
                    <Divider style={{ minWidth: "50%", width: "50%", margin: "30px auto", backgroundColor: "#dedede" }} />
                    <div className="contact-page-title">
                        <h2>Kontakt och intresseanmälan</h2>

                        Kontakta Tomas för mer information eller fyll i dina uppgifter i formuläret nedan. <br />
                        Vi garanterar inte att lokalen fortfarande är till salu, men vi återkommer med en bekräftelse inom kort.
                    </div>

                </div>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <div className="person-info">
                        <h3>Kontakta mig för mer information</h3>
                        <img src="../static/tomas-solberg_5.jpg" />
                        <div className="info">
                            <ul>
                                <li style={{ fontWeight: "900" }}>Tomas Solberg</li>
                                <li>Transaktionsrådgivare</li>
                                <li>Reg fastighetsmäklare</li>

                            </ul>
                        </div>
                        <div className="info">
                            <ul>
                                <li><h4>08 728 22 84</h4></li>
                                <li>
                                    <a href="mailto:tomas.solberg@bjurfors.se" target="_top">tomas.solberg@bjurfors.se</a>
                                </li>
                            </ul>
                        </div>
                        <div className="info">
                            <ul>
                                <li>Bjurfors Näringsliv Stockholm</li>
                                <li><a href="bjurforsnaringsliv.se">bjurforsnaringsliv.se</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="form" style={{ padding: "0 40px" }}>
                        <h2>Intresseanmälan</h2>

                        <p><span style={{ color: "red", paddingRight: '10px' }}>*</span>Indikerar obligatoriska fält</p>
                        <Form style={{ width: "350px", fontWeight: "900", fontSize: "16px", lineHeight: "26px" }} layout="vertical" onSubmit={handleSubmit}>
                            <Form.Item label="Namn" style={{ marginBottom: 0 }}>
                                {
                                    getFieldDecorator("namn", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "Please input your namn"

                                            }
                                        ]
                                    })(<>
                                        <Form.Item
                                            style={{ display: 'inline-block', width: 'calc(50% - 0px)', paddingRight: "30px" }}
                                        >
                                            <Input placeholder="Förnamn" style={{ height: "50px", borderRadius: "0px" }} />
                                            <label>
                                                Förnamn
                                            </label>
                                        </Form.Item>
                                        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 0px)' }}>
                                            <Input placeholder="Efternamn" style={{ height: "50px", borderRadius: "0px" }} />
                                            <label>Efternamn</label>
                                        </Form.Item>
                                    </>
                                    )
                                }

                            </Form.Item>
                            <Form.Item label="Telefonnummer">
                                {getFieldDecorator('telefonnummer', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input your telefonnummer!',
                                        },
                                    ],
                                })(<Input style={{ height: "50px", borderRadius: "0px" }} />)}
                            </Form.Item>

                            <Form.Item label="E-post">
                                {getFieldDecorator('e-post', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input your e-post!',
                                        },
                                    ],
                                })(<Input style={{ height: "50px", borderRadius: "0px" }} />)}
                            </Form.Item>

                            <Form.Item label="Intresserad av lokal nr - Brf Ekobacken ">
                                <Input style={{ height: "50px", borderRadius: "0px" }} />
                            </Form.Item>
                            <Form.Item label="Kommentar ">
                                <TextArea rows={8} />
                            </Form.Item>
                            <Form.Item>
                                <Button className="form-submit-btn" size="large" type="default" htmlType="submit">
                                    SKICKA
                                </Button>
                            </Form.Item>
                        </Form>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div >
    )
};
const WrappedContactForm = Form.create({ name: 'register' })(ContactForm);
export default WrappedContactForm;

