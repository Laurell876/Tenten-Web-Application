import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";

import SearchIcon from '@material-ui/icons/Search';
import SingleChatWeb from "../components/chat_screen_components/single_chat_web";
import ChatBubbleSectionWeb from "../components/chat_screen_components/chat_bubble_section_web";
import { useSubscription, useQuery } from "@apollo/react-hooks";
import { NEW_MESSAGE } from "../graphql/subscriptions";
import LoadingScreen from "./loading_screen";
import { ME } from "../graphql/queries";

export default function ChatsScreen() {
    const [currentChat, setCurrentChat] = useState();

    const newMessageObj = useSubscription(
        NEW_MESSAGE,
        {
            shouldResubscribe: true,
            fetchPolicy: "network-only",
            onSubscriptionData: (options) => {
                console.log(options)
                if (currentChat) {
                    let newMessage = options.subscriptionData.data.newMessage;
                    if (options.subscriptionData.data.newMessage.chat._id == currentChat._id) {
                        setCurrentChat({
                            ...currentChat,
                            messages: [...currentChat.messages, newMessage]
                        })
                    }
                    console.log("data received for")
                }
            }
        }
    );

    const meResponse = useQuery(ME, {
        fetchPolicy: "network-only"
    });

    // if(newMessageObj.data) {
    //     let newMessage = newMessageObj.data.newMessage;
    //     if(newMessage.chat._id == currentChat._id) {
    //         console.log("new message belongs to currentChat")
    //         // setCurrentChat({
    //         //     ...currentChat,
    //         //     messages: [...currentChat.messages, newMessage]
    //         // })
    //     }
    // }

    if (meResponse.loading) return <LoadingScreen />

    let me;
    if (meResponse.data && meResponse.data.me) {
        me = meResponse.data.me;
    }

    const switchCurrentChat = (chat) => {
        setCurrentChat(chat);
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
                                                active={currentChat ? chat._id == currentChat._id : false}
                                                chat={chat}
                                                functionToRunOnClick={switchCurrentChat}
                                            />
                                        })
                                    }

                                    {/* <SingleChatWeb active={true} />
                                    <SingleChatWeb active={false} />
                                    <SingleChatWeb active={false} />
                                    <SingleChatWeb active={false} />
                                    <SingleChatWeb active={false} /> */}
                                </div>
                            </Col>

                            <Col lg={9} md={10} id="bubble_section" >
                                <ChatBubbleSectionWeb me={me} currentChat={currentChat ? currentChat : null} />
                            </Col>

                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>)
}