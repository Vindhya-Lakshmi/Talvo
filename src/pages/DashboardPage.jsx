// D:\Projects\Talvo\Talvo\src\pages\DashboardPage.jsx
import { useUser } from '@clerk/clerk-react'
import { useState } from 'react'
import {useNavigate} from 'react-router'
import { useActiveSessions, useCreateSession, useMyRecentSessions } from '../hooks/useSessions'

function DashboardPage() {

  const navigate = useNavigate()
  const {user} = useUser()
  const [showCreateModel, setShowCreateModal] = useState(false);
  const [roomConfig, setRoomConfig] = useState({ problem: "", difficulty:""});

  const createSessionMutation = useCreateSession()
  const {data:activeSessionsData,isLoading:loadingActiveSessions}= useActiveSessions()
  const { data: recentSessionsData, isLoading: loadingRecentSessions } =
  useMyRecentSessions()
  
// const activeSessions = activeSessionsData?.sessions || []
// const recentSessions = recentSessionsData?.sessions || []



  return <div>Dashb</div>
  

  
}

export default DashboardPage
