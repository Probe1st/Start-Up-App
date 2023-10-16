

export default function Header() {

    return (
        <header>
            {/* 1-ая строчка */}
            <div>
                <p>
                    <span className="dgv">StrartUp Club</span><br />Statistics
                </p>
            </div>

            {/* 2-ая строка */}
            <div className="flex justify-between">
                <div className="statisticsWeek">
                    <div>
                        <p>1 неделя</p>
                    </div>

                    <div>
                        <p>начало</p>
                        <p>24.04.2023</p>
                    </div>

                    <div>
                        <p>конец</p>
                        <p>31.04.2023</p>
                    </div>

                    <div>
                        <p>выполнено</p>
                        <p className="text-textGreen">5 задач</p>
                    </div>

                    <div>
                        <p>осталось</p>
                        <p>10 задач</p>
                    </div>
                </div>
                <div>
                    <p>Вы участник</p>
                </div>
            </div>
        </header>
    )
}