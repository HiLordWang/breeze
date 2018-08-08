
const FetchRequest=(options)=> {
    let {dispatch,url,methoder,params,history,type,result}=options;
    dispatch({type:'LOADING_VIEW',payload:true})
    if (methoder == 'GET') {
        fetch(
            url
        ).then(res => {
                return res.json()
            }
        ).then(data => {
            dispatch({type:type, payload: data})
            dispatch({type:'LOADING_VIEW',payload:false})
        })
    }
    if (methoder == 'POST') {
        if(result=='login'){
            fetch(
                url,
                {
                    credentials: 'include',
                    method: 'POST',
                    headers:{
                        'Accept':'application/json,text/plain,*/*',
                        'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
                    },
                    body:params
                }
            ).then(res =>res.json()
            ).then((data) => {
                if(!data.err){
                    dispatch({type:type,payload:{auth:true,data:data}})
                    dispatch({type:'LOADING_VIEW',payload:false})
                    history.push('/user')
                }else {
                    alert('密码错误')
                }
            })
        }
        if(result=='reg'){
            fetch(
                url,
                {
                    credentials: 'include',
                    method: 'POST',
                    headers:{
                        'Accept':'application/json,text/plain,*/*',
                        'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
                    },
                    body:params
                }
            ).then(res =>res.text()
            ).then((data) => {
                dispatch({type:'LOADING_VIEW',payload:false})
                switch (data){
                    case '注册成功':
                        history.push('/login')
                        break;
                    case '错误的用户名密码':
                        alert('错误的用户名密码');
                        break;
                    case 'login error database':
                        alert('login error database');
                        break;
                }
            }).catch((err)=>{
                console.log(err)
            })

        }

    }


}

export default FetchRequest