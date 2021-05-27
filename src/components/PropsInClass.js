import React,{Component} from 'react'
import PropsExample from './PropsExample'

class PropsInClass extends Component{
    render(){
        return <p>This is from props: {this.props.info}</p>
    }
}
export default PropsInClass