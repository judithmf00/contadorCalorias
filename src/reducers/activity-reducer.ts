import { Activity } from "../types"

export type ActivityActions ={
    type:'saveActivity',
    payload:{newActivity : Activity}// 'Datos q se agregan al stado (actividad añadida)'
}

type ActivityState={
    activities: Activity[]
}

export const initialState: ActivityState={
    activities:[]
}

export const activityReducer=(
    action:ActivityActions
)=>{
    if (action.type == 'saveActivity') {
        console.log('activitii')
    }
}