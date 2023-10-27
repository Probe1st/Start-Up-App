import "./media";

export default function Tasks() {

    return (
        <section className="flex flex-col space-y-7 w-7/12">
            {/* <!-- Создать новую задачу --> */}
            <form className="flex space-x-3 borderGreenB bg-bgNeutral min-h-[56px] p-5 items-center" id="createTaskForm" autocomplete="off" action="js/formHandler.js" enctype="text/plain">
                <label className="self-start" for="newTask">//:</label>
                <textarea type="text" placeholder="Введите новую задачу..." required name="newTask"></textarea>
                <select name="profession" required id="profession">
                    <option value="" selected disabled>Профессия</option>
                    <option value="frontend-dev">Frontend Dev</option>
                    <option value="backend-dev">Backend Dev</option>
                    <option value="fullstack">Fullstack</option>
                    <option value="web-design">Web Design</option>
                </select>
                <button className="" type="submit">
                    <img className="min-h-[15px] cursor-pointer" alt="f" src={"svg/ArrowRight.svg"} />
                </button>
            </form>

            {/* <!-- Список задач --> */}
            <div id="list" className="flex flex-col space-y-5">
                <article className="tasks">
                    {/* <!-- 1 --> */}
                    <div className="flex flex-row justify-between">
                        <div>
                            <p>04.24.2023</p>
                            <h6>Написать базовую логику авторизации</h6>
                        </div>

                        {/* <!-- Пометка професии исполнителя --> */}
                        <div className="frontend-dev"></div>
                    </div>

                    {/* <!-- 2 --> */}
                    <div className="flex justify-between">
                        {/* <!-- Состояние --> */}
                        <div status className="complete"></div>

                        <p executor className="executor">Алиса Макова</p>
                    </div>
                </article>

                <article className="tasks">
                    {/* <!-- 1 --> */}
                    <div className="flex flex-row justify-between">
                        <div>
                            <p>04.24.2023</p>
                            <h6>Изучить основы HTML</h6>
                        </div>

                        {/* <!-- Пометка професии исполнителя --> */}
                        <div className="frontend-dev"></div>
                    </div>

                    {/* <!-- 2 --> */}
                    <div className="flex justify-between">
                        {/* <!-- Состояние --> */}
                        <div status className="inProgress"></div>

                        <p executor className="executor">Иванов Иван</p>
                    </div>
                </article>

                <article className="tasks">
                    {/* <!-- 1 --> */}
                    <div className="flex flex-row justify-between">
                        <div>
                            <p>04.24.2023</p>
                            <h6>Решить задачи на LeetCode (4 б)</h6>
                        </div>

                        {/* <!-- Пометка професии исполнителя --> */}
                        <div className="frontend-dev"></div>
                    </div>

                    {/* <!-- 2 --> */}
                    <div className="flex justify-between">
                        {/* <!-- Состояние --> */}
                        <div status className="take"></div>

                        <p executor className=""></p>
                    </div>
                </article>
            </div>
        </section>
    )
}