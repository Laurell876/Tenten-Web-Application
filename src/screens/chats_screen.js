import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";

import SearchIcon from '@material-ui/icons/Search';
import SingleChatWeb from "../components/chat_screen_components/single_chat_web";
import ChatBubbleSectionWeb from "../components/chat_screen_components/chat_bubble_section_web";
import { useSubscription, useQuery, useMutation } from "@apollo/react-hooks";
import { useLazyQuery } from "../custom_hooks/useLazyQuery"
import { NEW_MESSAGE } from "../graphql/subscriptions";
import LoadingScreen from "./loading_screen";
import { ME, GET_SINGLE_CHAT } from "../graphql/queries";
import { CREATE_MESSAGE } from "../graphql/mutations"



export default function ChatsScreen() {
    const [createMessage, createMessageObject] = useMutation(CREATE_MESSAGE);
    const [currentChat, setCurrentChat] = useState();
    const [chatsWithNewMessages, setChatsWithNewMessages] = useState([]);
    const [chatQueried, setChatQueried] = useState(null);
    const [currentChatLoading, setCurrentChatLoading] = useState(false);
    const [chatToSwitchTo, setChatToSwitchTo] = useState();

    const sendMessage = async (text) => {
        const messageCreated = await createMessage({
            variables: {
                data: {
                    chat: currentChat._id,
                    text: text
                }
            }
        })
        setCurrentChat({
            ...currentChat,
            messages: [...currentChat.messages, messageCreated.data.createMessage]
        })
    }

    const newMessageObj = useSubscription(
        NEW_MESSAGE,
        {
            shouldResubscribe: true,
            fetchPolicy: "network-only",
            onSubscriptionData: (options) => {
                addMessageToCurrentChat(options);
            }
        }
    );
    
    let me;
    const meResponse = useQuery(ME, {
        fetchPolicy: "network-only"
    });

    // const [getChat, { loading, data }] = useLazyQuery(GET_SINGLE_CHAT, {
    //     onCompleted: () => {
    //         console.log(data)
    //             setChatQueried(data.chats[0])
    //             setCurrentChat(chatQueried)
    //             setCurrentChatLoading(false)
    //             console.log(currentChatLoading)
            
    //     }
    // }, {
    //     chatId: chatToSwitchTo ? chatToSwitchTo._id : null
    // });



    if (meResponse.loading) return <LoadingScreen />

    if (meResponse.data && meResponse.data.me) {
        me = meResponse.data.me;
    }

    const switchCurrentChat = async (chat) => {
        setChatToSwitchTo(chat);

        getChat({
            variables: {
                chatId: chat._id
            }
        })

        // if(!data) {
        //     setCurrentChatLoading(true)
        // }
        
        // if(data && data.chats){
        //     setChatQueried(data.chats[0])
        //     setCurrentChat(chatQueried)
        //     setCurrentChatLoading(false)
        //     console.log(currentChatLoading)
        // }
        //setCurrentChat(chat); // it switches fast then updates the messages after
    }

    return (<div id="chats_screen">
        <Navbar />

        <Container>
            <Row>
                <Col lg={12} id="chat_screen_web">
                    <div>
                        <Row>
                            <Col lg={3} md={2} id="all_chats" >
                                <div id="all_chats_heading">
                                    Chats
                                    <span id="number_of_chats">6</span>
                                </div>
                                <div id="search_chats">
                                    <SearchIcon />
                                    <input id="search_chats_input" type="text" placeholder="Search Chats" />
                                </div>
                                <div id="chat_selection_section">
                                    {
                                        me.chats.map(chat => {
                                            return <SingleChatWeb
                                                otherUser={chat.userOne._id != me._id ? chat.userOne : chat.userTwo}
                                                active={currentChat ? chat._id == currentChat._id : false}
                                                chat={chat}
                                                functionToRunOnClick={switchCurrentChat}
                                                newMessage={chatsWithNewMessages.filter(chatWithNewMessage => chatWithNewMessage._id == chat._id).length > 0}
                                            />
                                        })
                                    }
                                </div>
                            </Col>

                            <Col lg={9} md={10} id="bubble_section" >
                                <ChatBubbleSectionWeb
                                    me={me}
                                    currentChat={currentChat ? currentChat : null}
                                    sendMessage={sendMessage}
                                    currentChatLoading={()=>currentChatLoading}
                                />
                            </Col>

                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>)

    function addMessageToCurrentChat(options) {
        // if (currentChat) { // if a current chat is selected
        //     let newMessage = options.subscriptionData.data.newMessage;
        //     if (options.subscriptionData.data.newMessage.chat._id == currentChat._id) {
        //         setCurrentChat({
        //             ...currentChat,
        //             messages: [...currentChat.messages, newMessage]
        //         });
        //     } else {
        //         let chatMessageBelongsTo = me.chats.filter(chat => chat._id == options.subscriptionData.data.newMessage.chat._id);
        //         setChatsWithNewMessages([...chatsWithNewMessages, chatMessageBelongsTo]);
        //     }
        // }


    }



}