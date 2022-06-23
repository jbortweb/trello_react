import React from 'react'
import Textarea from 'react-textarea-autosize';
import './ButtonAction.scss';
import Button from '@mui/material/Button';
import Icon from '@mui/icons-material/Close'

class ButtonAction extends React.Component {

    state = {
        formOpen:false
    }

    openForm= () => {
        this.setState({
            formOpen:true
        });
    };

    closeForm = () => {
        this.setState({
            formOpen:false
        })
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }


    rendAddButton =() =>{
        const {list} = this.props;
        const textButton = list ? ' + Añada otra tarjeta' : ' + Añada otra tarea';
        const plusButton = list ? 'plusTarjeta' : 'plusTarea';

        return (
            <div 
            className='textAdd'
            onClick={this.openForm}
            >
                <p className={plusButton}>
                    {textButton}
                </p>
            </div>
        )
    }

    rendForm= () => {

        const {list} = this.props;
        const addTextArea = list ? 'tarjetaAreaText' : 'tareaAreaText'

        return (
            <div>
                <div className='container-area'>                
                    <Textarea
                    className={addTextArea}
                    placeholder =  {
                        list ? 'Ponga el nombre de su tarjeta': 'Ponga el título de su tarea'
                    }
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleChange}
                    />                
                </div>
                <div className='container-button'>
                    <Button
                    className='buttonAdd'
                    variant='contained'
                    >
                        {list ? 'Añadir tarjeta' : 'Añadir Tarea'}
                    </Button>
                    <Icon className='closeIcon'>
                        Close
                    </Icon>
                </div>

            </div>
        )
    }
    
    render() {
        return this.state.formOpen ? this.rendForm() : this.rendAddButton();
        
    }
}

export default ButtonAction;