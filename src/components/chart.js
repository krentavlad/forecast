import _ from 'lodash'
import React, {Component} from "react"
import {Sparklines,SparklinesLine,SparklinesReferenceLine} from 'react-sparklines'

export default (props)=> {
    function average(x) {
        return (_.round(_.sum(x)/x.length))
    
    }
return(<div>
     <Sparklines width={180} height={120} data={props.data}>
                   <SparklinesLine color={props.color} />
                   <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)}</div>
</div>)
}