import { UserInfo, Section } from 'components'
import Profile from './../layouts/profile'
import data from 'data/data.json'
import QNA from 'components/qna'

export default function Home() {
  const { contacts, socials, qna } = data
  return (
    <Profile>
      <UserInfo />
      {contacts.display && <Section name="Contacts" items={contacts.items} />}
      {socials.display && <Section name="Socials" items={socials.items} />}
      {/* {qna.display && <QNA {...qna} />} */}
    </Profile>
  )
}
