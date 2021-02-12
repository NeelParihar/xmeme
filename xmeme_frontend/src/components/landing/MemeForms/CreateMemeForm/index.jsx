import React, { useContext } from 'react';
import axios from 'axios';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Input, Card } from 'components/common';
import { Error, Center, InputField, Wrapper, Grid, Details } from './styles';
import { Preview, Item } from '../styles';
import { ThemeContext } from "providers/ThemeProvider";
import Like from "components/common/Icons/Like";
import { Content, Stats } from "../../Memes/styles";
export const MemeForm = () => {
  const { theme } = useContext(ThemeContext);
  const { reload, setReload } = useContext(ThemeContext);
  return (
    <Wrapper theme={theme}>

      <h2>Meme Stream</h2>


      <p>Upload your funniest memes now!</p>

      <Formik
        initialValues={{
          name: '',
          caption: '',
          url: '',
          success: false,
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Name field is required'),
          caption: Yup.string().required("Caption field is required"),
          url: Yup.string().required('Url field is required'),
        })}
        onSubmit={async ({ name, caption, url }, { setSubmitting, resetForm, setFieldValue }) => {
          try {
            const res = await axios({
              method: 'POST',
              url: `${process.env.BACKEND_URL}memes`,
              headers: {
                'Content-Type': 'application/json',
              },
              data: JSON.stringify({
                name,
                caption,
                url,
              }),
            })
            console.log(res);
            setSubmitting(false);
            setFieldValue('success', true);
            setReload(true);

            setTimeout(() => resetForm(), 6000);
          } catch (err) {

            setSubmitting(false);
            setFieldValue('success', false);
            alert("Something went wrong, please try again! \n " + err.statusCode === 409 ? 'Meme with similar URL is already submitted' : err); // eslint-disable-line
            resetForm()
          }
        }}
      >
        {({ values, touched, errors, setFieldValue, isSubmitting }) => (
          <>
            {!values.success && (
              <>

                <Grid>
                  <Details>

                    <Form>
                      <label htmlFor="MemeOwner">Meme Owner</label>
                      <InputField>

                        <Input
                          as={FastField}
                          type="text"
                          name="name"
                          component="input"
                          aria-label="name"
                          placeholder="Enter your full name"
                          error={touched.name && errors.name}
                        />
                        <ErrorMessage component={Error} name="name" />
                      </InputField>
                      <label htmlFor="caption">Caption</label>
                      <InputField>
                        <Input
                          as={FastField}
                          component="textarea"
                          aria-label="caption"
                          id="caption"
                          rows="1"
                          type="text"
                          name="caption"
                          placeholder="Be creative with caption"
                          error={touched.caption && errors.caption}
                        />
                        <ErrorMessage component={Error} name="caption" />
                      </InputField>
                      <label htmlFor="url">Meme URL</label>
                      <InputField>
                        <Input
                          id="url"
                          aria-label="url"
                          component="input"
                          as={FastField}
                          type="url"
                          name="url"
                          placeholder="Enter URL of your meme here"
                          label="Url"
                          error={touched.url && errors.url}
                        >

                        </Input>

                        <ErrorMessage component={Error} name="url" />

                      </InputField>
                      <Button secondary type="submit" disabled={isSubmitting} className="submit-btn">
                        Submit meme
                      </Button>

                    </Form>
                  </Details>

                  <Center theme={theme}>
                    <Preview theme={theme}>
                      <Item theme={theme}>
                        <Card theme={theme}>
                          <div style={{ textAlign: 'center', fontSize: '9pt', marginBottom: '18pt' }}>Your creative meme will look like this</div>

                          <Content theme={theme}>

                            <h4>{values.name === '' ? 'Meme Owner here' : values.name}</h4>
                            <p>{values.caption === '' ? 'creative caption here' : values.caption}</p>

                          </Content>
                          <img src={values.url === '' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRObJHq0Or1CgS4MLT-0tsrv__aGDKfw3zQ&usqp=CAU' : values.url} />
                          <Stats theme={theme}>

                            <div>
                              <Like />
                              <span>0</span>
                            </div>

                          </Stats>

                        </Card>

                      </Item>

                    </Preview>
                  </Center>

                </Grid>
              </>
            )}
            {values.success && (

              <Grid>
                <Details>
                  <h4 style={{ color: 'lightgreen' }}>Your meme has been successfully uploaded!</h4>
                  <img src='data:image/jpeg;base64,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' />

                </Details>

              </Grid>
            )}
          </>
        )}
      </Formik>

    </Wrapper>
  )
};
