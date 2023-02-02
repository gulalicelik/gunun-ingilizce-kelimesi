/* eslint-disable */
import React from "react";
import {NavLink, Redirect} from "react-router-dom";
// Chakra imports
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import {HSeparator} from "components/separator/Separator";
import DefaultAuth from "layouts/auth/Default";
// Assets
import illustration from "assets/img/auth/auth.png";
import {MainContext, useContext} from "../../../contexts/MainContext";
import {MdOutlineRemoveRedEye} from "react-icons/md";
import {RiEyeCloseLine} from "react-icons/ri";

import axios from "axios";




function SignIn() {
    // Chakra color mode
    const textColor = useColorModeValue("navy.700", "white");
    const textColorSecondary = "gray.400";
    const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
    const textColorBrand = useColorModeValue("brand.500", "white");
    const brandStars = useColorModeValue("brand.500", "brand.400");


    const [show, setShow] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPasswd] = React.useState("");


    const {isLogged, setIsLogged} = useContext(MainContext)

    const handleClick = () => setShow(!show);

    const handleLogin = () => {
        axios.post("http://ec2-50-19-171-227.compute-1.amazonaws.com:3000/user/signin", {
            email,
            password
        }).then((response) => {
            console.log(response.data);
            if (response.data.status === "success") {
                console.log("success");
                localStorage.setItem("token", response.data.token);
                setIsLogged(true);

            } else {
                console.log("error");
                setIsLogged(false);
            }
            console.log(isLogged);
        }).catch((e) => {
            console.log(e);
        });
    }

    return (
        <DefaultAuth illustrationBackground={illustration} image={illustration}>
            <Flex
                maxW={{base: "100%", md: "max-content"}}
                w='100%'
                mx={{base: "auto", lg: "0px"}}
                me='auto'
                h='100%'
                alignItems='start'
                justifyContent='center'
                mb={{base: "30px", md: "60px"}}
                px={{base: "25px", md: "0px"}}
                mt={{base: "40px", md: "14vh"}}
                flexDirection='column'>
                <Box me='auto'>
                    <Heading color={textColor} fontSize='36px' mb='10px'>
                        Sign In
                    </Heading>



                    <Text
                        mb='36px'
                        ms='4px'
                        color={textColorSecondary}
                        fontWeight='400'
                        fontSize='md'>
                        Enter your email and password to sign in!
                    </Text>
                </Box>
                <Text
                    mb='36px'
                    ms='4px'
                    color={textColorSecondary}
                    fontWeight='400'
                    fontSize='md'>
                    demo@gmail.com
                </Text>
                <Text
                    mb='36px'
                    ms='4px'
                    color={textColorSecondary}
                    fontWeight='400'
                    fontSize='md'>
                    Demo123.
                </Text>
                {isLogged ? <div>Logged in</div> : <div>Not logged in</div>}
                {isLogged ?? <Redirect to="/admin" />}
                <Flex
                    zIndex='2'
                    direction='column'
                    w={{base: "100%", md: "420px"}}
                    maxW='100%'
                    background='transparent'
                    borderRadius='15px'
                    mx={{base: "auto", lg: "unset"}}
                    me='auto'
                    mb={{base: "20px", md: "auto"}}>

                    <FormControl>
                        <FormLabel
                            display='flex'
                            ms='4px'
                            fontSize='sm'
                            fontWeight='500'
                            color={textColor}
                            mb='8px'>
                            Email<Text color={brandStars}>*</Text>
                        </FormLabel>
                        <Input
                            isRequired={true}
                            variant='auth'
                            fontSize='sm'
                            ms={{base: "0px", md: "0px"}}
                            type='email'
                            placeholder='mail@example.com'
                            mb='24px'
                            fontWeight='500'
                            size='lg'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FormLabel
                            ms='4px'
                            fontSize='sm'
                            fontWeight='500'
                            color={textColor}
                            display='flex'>
                            Password<Text color={brandStars}>*</Text>
                        </FormLabel>
                        <InputGroup size='md'>
                            <Input
                                isRequired={true}
                                fontSize='sm'
                                placeholder='************'
                                mb='24px'
                                size='lg'
                                type={show ? "text" : "password"}
                                variant='auth'
                                onChange={(e) => setPasswd(e.target.value)}
                            />
                            <InputRightElement display='flex' alignItems='center' mt='4px'>
                                <Icon
                                    color={textColorSecondary}
                                    _hover={{cursor: "pointer"}}
                                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                                    onClick={handleClick}
                                />
                            </InputRightElement>
                        </InputGroup>
                        <Flex justifyContent='space-between' align='center' mb='24px'>
                            <FormControl display='flex' alignItems='center'>
                                <Checkbox
                                    id='remember-login'
                                    colorScheme='brandScheme'
                                    me='10px'
                                />
                                <FormLabel
                                    htmlFor='remember-login'
                                    mb='0'
                                    fontWeight='normal'
                                    color={textColor}
                                    fontSize='sm'>
                                    Keep me logged in
                                </FormLabel>
                            </FormControl>
                            <NavLink to='/auth/forgot-password'>
                                <Text
                                    color={textColorBrand}
                                    fontSize='sm'
                                    w='124px'
                                    fontWeight='500'>
                                    Forgot password?
                                </Text>
                            </NavLink>
                        </Flex>
                        <Button
                            fontSize='sm'
                            variant='brand'
                            fontWeight='500'
                            w='100%'
                            h='50'
                            mb='24px'
                            onClick={handleLogin}>
                            Sign In
                        </Button>
                    </FormControl>
                    <Flex
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='start'
                        maxW='100%'
                        mt='0px'>
                        <Text color={textColorDetails} fontWeight='400' fontSize='14px'>
                            Not registered yet?
                            <NavLink to='/auth/sign-up'>
                                <Text
                                    color={textColorBrand}
                                    as='span'
                                    ms='5px'
                                    fontWeight='500'>
                                    Create an Account
                                </Text>
                            </NavLink>
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </DefaultAuth>
    );
}

export default SignIn;
