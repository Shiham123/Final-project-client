import { useContext } from 'react';
import { AppContext } from '../../Context/context';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaBook, FaDollarSign, FaProductHunt, FaUser } from 'react-icons/fa';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from 'recharts';
import PropTypes from 'prop-types';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const DashBroadPage = () => {
  const { user } = useContext(AppContext);
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const response = await axiosSecure.get('/admin-stats');
      return response.data;
    },
  });

  const { data: charData = [] } = useQuery({
    queryKey: ['order-stats'],
    queryFn: async () => {
      const response = await axiosSecure.get('/order-stats');
      return response.data;
    },
  });

  const mapCharData = charData.map((item) => {
    return { name: item.category, value: item.totalRevenue };
  });

  const { users, revenue, orders, menuItems } = stats;

  /**
   * ? custom shape for the bar chart
   */

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  TriangleBar.propTypes = {
    fill: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  };

  /**
   * ! custom pie chart
   */

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <div>{user?.displayName ? user?.displayName : 'Back'}</div>
      <div className="flex justify-around items-center gap-8 my-12">
        <h1 className="bg-transparent border-2 border-formTextColor px-20 py-8 font-cinzel text-4xl font-semibold text-footerBgColorThree rounded-lg hover:bg-formTextColor hover:text-white duration-200 hover:scale-110">
          <div className="flex gap-4">
            <FaUser />
            <span>{users}</span>
          </div>
        </h1>
        <h1 className="bg-transparent border-2 border-formTextColor px-20 py-8 font-cinzel text-4xl font-semibold text-footerBgColorThree rounded-lg hover:bg-formTextColor hover:text-white duration-200 hover:scale-110">
          <div className="flex gap-4">
            <FaDollarSign />
            <span>{revenue}</span>
          </div>
        </h1>
        <h1 className="bg-transparent border-2 border-formTextColor px-20 py-8 font-cinzel text-4xl font-semibold text-footerBgColorThree rounded-lg hover:bg-formTextColor hover:text-white duration-200 hover:scale-110">
          <div className="flex gap-4">
            <FaBook />
            <span>{menuItems}</span>
          </div>
        </h1>
        <h1 className="bg-transparent border-2 border-formTextColor px-20 py-8 font-cinzel text-4xl font-semibold text-footerBgColorThree rounded-lg hover:bg-formTextColor hover:text-white duration-200 hover:scale-110">
          <div className="flex gap-4">
            <FaProductHunt />
            <span>{orders}</span>
          </div>
        </h1>
      </div>

      {/* ? this is bar chart */}

      <div className="flex">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={charData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="totalRevenue"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: 'top' }}
            >
              {charData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <PieChart width={400} height={400}>
            <Pie
              data={mapCharData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {mapCharData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default DashBroadPage;
