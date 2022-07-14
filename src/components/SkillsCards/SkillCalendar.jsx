import GitHubCalendar from 'react-github-calendar'

export function SkillCalendar() {
  return (
    <div className="px-[30px]">
      <GitHubCalendar
        username="x-speedblack-x"
        year={new Date().getFullYear()}
        color="#cd5ff8"
        fontSize={12}
        blockSize={14}
        blockMargin={5}
      />
    </div>
  )
}
