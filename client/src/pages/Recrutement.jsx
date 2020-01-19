import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class Recrutement extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Nom'
            placeholder='Nom'
          />
          <Form.Field
            control={Input}
            label='Prenom'
            placeholder='Prenom'
          />
          <Form.Field
            control={Input}
            label='Numero de Telephone'
            options={options}
            placeholder='Numero de Telephone'
          />
          
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Email'
            placeholder='Email'
          />
          <Form.Field
            control={Input}
            label='Adresse'
            placeholder='Adresse'
          />
        </Form.Group>
        <Form.Group inline>
          <label>Langues</label>
          <Form.Field
            control={Checkbox}
            label='Arabe'
            value='ar'
            checked={value === 'ar'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Checkbox}
            label='Francais'
            value='fr'
            onChange={this.handleChange}
          />
          <Form.Field
            control={Checkbox}
            label='Anglais'
            value='ang'
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label='About'
          placeholder='Tell us more about you...'
        />
        <Form.Field
          control={Checkbox}
          label='I agree to the Terms and Conditions'
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

export default Recrutement
