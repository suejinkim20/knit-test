import { Fragment, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Menu } from '@components/menu'
import {
  AgendaView,
  CfaView,
  HomeView,
  MarkdownView,
  NotFoundView,
  RegistrationView,
  TravelView,
} from './views'
import { Header, Footer } from '@components/layout'

const menuOptions = [
  {
    path: '/',
    label: 'Home',
    view: <HomeView />,
  },
  {
    path: '/registration',
    label: 'Registration',
    view: <RegistrationView />,
  },
  {
    path: '/travel',
    label: 'Travel Info',
    view: <TravelView />,
  },
  {
    path: '/cfa',
    label: 'Calls for Action',
    view: <CfaView />,
  },
  {
    path: '/agenda',
    label: 'Agenda',
    view: <AgendaView />,
  }
]

export const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const path = params.get('');
    if (path) {
      navigate('/' + path, { replace: true });
    }
  }, [navigate]);

  return (
    <Fragment>
      <Header />
      <Menu options={menuOptions} />
      <main>
        <Routes>
          {menuOptions.map(({ path, view, label }) => (
            <Route
              key={`route-${label}`}
              path={path}
              element={view}
            />
          ))}
          <Route path="__markdown" element={<MarkdownView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  )
}
