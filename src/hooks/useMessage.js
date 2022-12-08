import { message as messageAnt } from "antd";

function useMessage() {
    const [messageApi, contextHolder] = messageAnt.useMessage();
 
    const message = {
        success: (content) => {
            messageApi.open({
                type: 'success',
                content
            });
        },
        error: (content) => {
            messageApi.open({
                type: 'error',
                content
            })
        },
    }

    return {message, contextHolder}
}

export default useMessage