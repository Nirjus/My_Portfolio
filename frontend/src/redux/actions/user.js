import axios from "axios";
import { server } from "../../server";

export const getUser = () => async (dispatch)  =>{
      try {
        dispatch({
            type: "GET_USER_REQUEST",
        });
        const {data} = await axios.get(`${server}/api/user/users`,{withCredentials:true});

        dispatch({
            type: "GET_USER_SUCCESS",
            payload: data.user
        });

      } catch (error) {
        dispatch({
            type: "GET_USER_FAILURE",
            payload: error.response.data.message,
        });
      }
}


export const login = (email, password ) => async (dispatch)  =>{
    try {
      dispatch({
          type: "LOGIN_REQUEST",
      });
      const {data} = await axios.put(`${server}/api/user/login`,{
        email,password
      },{withCredentials:true},{
        headers:{
       "Content-Type": "application/json",
        }
      });
      dispatch({
          type: "LOGIN_SUCCESS",
          payload: data.message
      })
    
    } catch (error) {
      dispatch({
          type: "LOGIN_FAILURE",
          payload: error.response.data.message,
      });
    }
}

export const logout = () => async (dispatch)  =>{
    try {
      dispatch({
          type: "LOGOUT_REQUEST",
      });
      const {data} = await axios.put(`${server}/api/user/logout`,{withCredentials: true});

      dispatch({
          type: "LOGOUT_SUCCESS",
          payload: data.message
      });

    } catch (error) {
      dispatch({
          type: "LOGOUT_FAILURE",
          payload: error.response.data.message,
      });
    }
}

export const loadUser = () => async (dispatch)  =>{
  try {
    dispatch({
        type: "LOAD_USER_REQUEST",
    });
    const {data} = await axios.get(`${server}/api/user/me`,{withCredentials: true});

    dispatch({
        type: "LOAD_USER_SUCCESS",
        payload: data.user
    });

  } catch (error) {
    dispatch({
        type: "LOAD_USER_FAILURE",
        payload: error.response.data.message,
    });
  }
}

export const updateUser = (name,email, password,skills,about ) => async (dispatch)  =>{
  try {
    dispatch({
        type: "UPDATE_USER_REQUEST",
    });
    const {data} = await axios.put(`${server}/api/user/admin/update`,{
      name,email, password,skills,about
    },{withCredentials:true},{
      headers:{
     "Content-Type": "application/json",
      }
    });

    dispatch({
        type: "UPDATE_USER_SUCCESS",
        payload: data.message
    });

  } catch (error) {
    dispatch({
        type: "UPDATE_USER_FAILURE",
        payload: error.response.data.message,
    });
  }
}


export const addTimeline = (title, description,date,company,image ) => async (dispatch)  =>{
  try {
    dispatch({
        type: "ADD_TIMELINE_REQUEST",
    });
    const {data} = await axios.post(`${server}/api/user/admin/timeline/add`,{
      title, description,date,company,image
    },{withCredentials: true},{
      headers:{
     "Content-Type": "application/json",
      }
    });

    dispatch({
        type: "ADD_TIMELINE_SUCCESS",
        payload: data.message
    });

  } catch (error) {
    dispatch({
        type: "ADD_TIMELINE_FAILURE",
        payload: error.response.data.message,
    });
  }
}

export const deleteTimeline = (id) => async (dispatch)  =>{
  try {
    dispatch({
        type: "DELETE_TIMELINE_REQUEST",
    });
    const {data} = await axios.delete(`${server}/api/user/admin/timeline/${id}`,{withCredentials: true});

    dispatch({
        type: "DELETE_TIMELINE_SUCCESS",
        payload: data.message
    });

  } catch (error) {
    dispatch({
        type: "DELETE_TIMELINE_FAILURE",
        payload: error.response.data.message,
    });
  }
}


export const addAchivements = (title, url,image ) => async (dispatch)  =>{
  try {
    dispatch({
        type: "ADD_ACHIVEMENTS_REQUEST",
    });
    const {data} = await axios.post(`${server}/api/user/admin/achivements/add`,{
      title, url,image
    },{withCredentials:true},{
      headers:{
     "Content-Type": "application/json",
      }
    });

    dispatch({
        type: "ADD_ACHIVEMENTS_SUCCESS",
        payload: data.message
    });

  } catch (error) {
    dispatch({
        type: "ADD_ACHIVEMENTS_FAILURE",
        payload: error.response.data.message,
    });
  }
}

export const deleteAchivement = (id) => async (dispatch)  =>{
  try {
    dispatch({
        type: "DELETE_ACHIVEMENTS_REQUEST",
    });
    const {data} = await axios.delete(`${server}/api/user/admin/achivements/${id}`,{withCredentials:true});

    dispatch({
        type: "DELETE_ACHIVEMENTS_SUCCESS",
        payload: data.message
    });

  } catch (error) {
    dispatch({
        type: "DELETE_ACHIVEMENTS_FAILURE",
        payload: error.response.data.message,
    });
  }
}


export const addProject = (url, title, image, description, technology ) => async (dispatch)  =>{
  try {
    dispatch({
        type: "ADD_PROJECTS_REQUEST",
    });
    const {data} = await axios.post(`${server}/api/user/admin/projects/add`,{
      url, title, image, description, technology
    },{withCredentials: true},{
      headers:{
     "Content-Type": "application/json",
      }
    });

    dispatch({
        type: "ADD_PROJECTS_SUCCESS",
        payload: data.message
    });

  } catch (error) {
    dispatch({
        type: "ADD_PROJECTS_FAILURE",
        payload: error.response.data.message,
    });
  }
}

export const deleteProject = (id) => async (dispatch)  =>{
  try {
    dispatch({
        type: "DELETE_PROJECTS_REQUEST",
    });
    const {data} = await axios.delete(`${server}/api/user/admin/project/${id}`, {withCredentials:true});

    dispatch({
        type: "DELETE_PROJECTS_SUCCESS",
        payload: data.message
    });

  } catch (error) {
    dispatch({
        type: "DELETE_PROJECTS_FAILURE",
        payload: error.response.data.message,
    });
  }
}



export const contactUs = (name, email, message ) => async (dispatch)  =>{
  try {
    dispatch({
        type: "CONTACT_US_REQUEST",
    });
    const {data} = await axios.post(`${server}/api/user/contact`,{
      name, email, message
    },{withCredentials: true},{
      headers:{
     "Content-Type": "application/json",
      }
    });

    dispatch({
        type: "CONTACT_US_SUCCESS",
        payload: data.message
    });

  } catch (error) {
    dispatch({
        type: "CONTACT_US_FAILURE",
        payload: error.response.data.message,
    });
  }
}