import Footer from "../components/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
// import { LockClosedIcon } from '@heroicons/react/solid'

const SelfAssessment = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [loading,setLoading] = useState(false)
    const [userId,setUserId] = useState("")
    const [message,setMessage] = useState("")
    
    const [employment,setEmployment] = useState("")
    const [mentallyIll,setMentallyIll] = useState("")
    const [education,setEducation] = useState("")
    const [own_computer,setOwn_computer] = useState("")
    const [hospitalized,setHospitalized] = useState("")
    const [hospitalized1,setHospitalized1] = useState("")
    const [legally_disabled,setLegally_disabled] = useState("")
    const [internet,setInternet] = useState("")
    const [live_parents,setLive_parents] = useState("")
    const [resume_gap,setResume_gap] = useState("")
    const [total_gap,setTotal_gap] = useState("")
    const [income,setIncome] = useState("")
    const [unemployed,setUnemployed] = useState("")
    const [read_out_work_school,setRead_out_work_school] = useState("")
    const [income_social_welfare,setIncome_social_welfare] = useState("")
    const [food_stamps,setFood_stamps] = useState("")
    const [section_8,setSection_8] = useState("")
    const [lack_concentration,setLack_concentration] = useState("")
    const [anxiety,setAnxiety] = useState("")
    const [depression,setDepression] = useState("")
    const [obsessive_thinking,setObsessive_thinking] = useState("")
    const [mood_swings,setMood_swings] = useState("")
    const [panic_attacks,setPanic_attacks] = useState("")
    const [compulsive_behavior,setCompulsive_behavior] = useState("")
    const [tiredness,setTiredness] = useState("")
    const [age,setAge] = useState("")
    const [gender,setGender] = useState("")
    
    
    useEffect(() => {
        setLoggedIn(localStorage.getItem('loggedIn'));
        setUserId(JSON.parse(localStorage.getItem('userid')))
    }, [])
    const url = "http://localhost:5000/api/assessment/selfassessment1";
    const router = useRouter();
    const handleSubmit = (e)=>{
      e.preventDefault();
      setLoading(true);

      const data = {
        employment ,
        mentallyIll ,
        education ,
        own_computer ,
        hospitalized ,
        hospitalized1 ,
        legally_disabled ,
        internet ,
        live_parents ,
        resume_gap ,
        total_gap ,
        income ,
        unemployed ,
        read_out_work_school ,
        income_social_welfare ,
        food_stamps ,
        section_8 ,
        lack_concentration ,
        anxiety ,
        depression ,
        obsessive_thinking ,
        mood_swings ,
        panic_attacks ,
        compulsive_behavior ,
        tiredness ,
        age ,
        gender,
        userId
      }

      var requestOptions = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      };

      fetch(url, requestOptions)
          .then((response) => {
              // console.log("response", response.json())
              return response.json();
          })
          .then((data)=>{
              if (data.resCode === 400) {
                  toast.error(
                      "Data is incorrect",
                      {
                          position: toast.POSITION.TOP_CENTER,
                          autoClose: 2000,
                      }
                  );
                  setLoading(false)
              } else if (data.resCode === 200) {
                  toast.success(
                      "Details submitted successfully",
                      {
                          position: toast.POSITION.TOP_CENTER,
                          autoClose: 2000,
                      }
                  );
                  
                  setMessage(data.message);
                  console.log(data)
                  setLoading(false)
                  
              }
              console.log(data);
              
          })
          .catch((error) => console.error(error));
    }
    return (
        <>
            <div className="flex flex-row justify-around items-center w-full bg-[#1551b8] text-white text-[8px] md:text-[16px]">
                <img src="/logo.jpg" alt="logo" width={100} height={100} onClick={() => router.push("/")}
                    className="cursor-pointer" />
                <div className="navlink">
                    <Link href="/about-us" className="nav-links">
                        About
                    </Link>
                    <Link href="/moodtracker" className="nav-links">
                        Self Assessment Tool
                    </Link>
                    <Link href="/education" className="nav-links">
                        Education
                    </Link>
                    <Link href="/vent-it-out" className="nav-links">
                        Vent It Out
                    </Link>
                    <Link href="/consult" className="nav-links">
                        Consult
                    </Link>
                    <Link
                        href="http://healthcollective.in/contact/helplines/"
                        className="nav-links"
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        Helpline
                    </Link>
                </div>
                {loggedIn && (
                    <>
                    <div className="button">
                        <Link href="/createprofile" style={{marginRight:
                        "10px"}}>
                        Create Profile
                        </Link>
                        <Link href="/profile" style={{marginRight:
                        "10px"}}>
                        View Profile
                        </Link>
                        <button
                            className="login"
                            onClick={() => {
                                localStorage.removeItem("loggedIn");
                                router.reload();
                            }}
                        >
                            Log Out
                        </button>
                        </div>
                    </>
                )}
                {!loggedIn && (
                    <div className="button">
                        <button className="login" onClick={() => router.push("/login")}>
                            Log In
                        </button>
                        <button className="signup" onClick={() => router.push("/signup")}>
                            Sign Up
                        </button>
                    </div>
                )}
            </div>
            {/* <div className="my-40 text-center text-[50px] font-bold"> */}
           


               

              <form onSubmit={handleSubmit}>
                <div>
                    
                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Education:</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="education"
                            className='ml-3 form-check form-check-inline'
                            value="5"
                            onChange={(e) => setEducation(e.target.value)}
                            required
                        /> Completed Masters

                        <input
                            type="radio"
                            name="education"
                            className='ml-3'
                            value="7"
                            onChange={(e) => setEducation(e.target.value)}
                            required
                        /> Completed Phd

                        <input
                            type="radio"
                            name="education"
                            className='ml-3'
                            value="3"
                            onChange={(e) => setEducation(e.target.value)}
                            required
                        /> Completed Undergraduate

                        <input
                            type="radio"
                            name="education"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setEducation(e.target.value)}
                            required
                        /> High School or GED
                        <input
                            type="radio"
                            name="education"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setEducation(e.target.value)}
                            required
                        /> Pursuing highschool
                        <input
                            type="radio"
                            name="education"
                            className='ml-3'
                            value="6"
                            onChange={(e) => setEducation(e.target.value)}
                            required
                        /> Pursuing Phd
                        <input
                            type="radio"
                            name="education"
                            className='ml-3'
                            value="2"
                            onChange={(e) => setEducation(e.target.value)}
                            required
                        /> Pursuing Undergraduate
                        
                        <input
                            type="radio"
                            name="education"
                            className='ml-3'
                            value="4"
                            onChange={(e) => setEducation(e.target.value)}
                            required
                        /> Pursuing Masters
                        
                        </span>
                        </>
                    </h1>
                   

                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>I am currently employed at least part-time</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="employment"
                            className='ml-3'
                            value="Yes"
                            onChange={(e) => setEmployment(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="employment"
                            className='ml-3'
                            value="No"
                            onChange={(e) => setEmployment(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>

                    
                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>I identify as having a mental illness</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="mentallyIll"
                            className='ml-3'
                            value="Yes"
                            onChange={(e) => setMentallyIll(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="mentallyIll"
                            className='ml-3'
                            value="No"
                            onChange={(e) => setMentallyIll(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>
                    
                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>I have my own computer separate from a smart phone</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="ex"
                            className='ml-3'
                            value="Yes"
                            onChange={(e) => setExercise(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="ex"
                            className='ml-3'
                            value="No"
                            onChange={(e) => setExercise(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>

                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Have you ever smoked cigarettes?</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="smoke"
                            className='ml-3'
                            value="Yes"
                            onChange={(e) => setSmoke(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="smoke"
                            className='ml-3'
                            value="No"
                            onChange={(e) => setSmoke(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>
                    
                    
                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>On a scale of 1 to 10, (ten being strongest) how strong is your desire to kill yourself currently?</span>
                        <span className="mt-3">
                        <input
                            type="number"
                            className="border rounded px-4 py-2"
                            placeholder="Enter scale (1-10)"
                            name="scale"
                            // value={scale}
                            onChange={(e) => setScale(e.target.value)}
                            required
                        />
                        </span>
                        </>
                    </h1>
                    
                    
                   
                </div>
                <div className="flex justify-center mt-5">
                        <button
                            type="submit"
                            className="py-1 px-7  mb-3 text-white font-bold bg-[#1551b8] border rounded hover:text-[#1551b8] hover:bg-white"
                            // disabled={showErr || showErr2}
                        >
                            {loading ? (
                                <FaSpinner className="animate-spin" />
                            ) : (
                                <span>Evaluate Mental Health Score</span>
                            )}
                        </button>
                        
                    </div>
                </form>
                <div className="flex justify-center mt-5 mb-5">
                <span>
                          {message!=""?
                            <>
                              <h1 className="text-center">Your mental health score is: {score}</h1>
                              <h4 className="text-center">Message for you: {message}</h4>
                            </>
                          :
                          <>
                          </>
                          }
                        </span>
                </div>
                {/* <h1>FEATURE COMING SOON ...</h1>
                <Link href={'https://github.com/ayushtyagi14/shebuilds/tree/main/chatbot'} className='text-[25px] text-blue-300 hover:underline'>
                    Check out the GitHub Code!
                </Link> */}
            {/* </div> */}

                
         
            <Footer />
        </>
    )
}

export default SelfAssessment;
