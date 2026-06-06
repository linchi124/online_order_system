import { useMemo, useState } from 'react';
import { restaurants } from './data.js';

const initialCustomer = {
  name: '',
  phone: '',
  address: '',
};

function App() {
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState(initialCustomer);
  const [stage, setStage] = useState('menu');
  const [paymentStatus, setPaymentStatus] = useState('idle');
  const publicPath = import.meta.env.BASE_URL;

  const activeRestaurant = useMemo(
    () => restaurants.find((item) => item.id === activeRestaurantId),
    [activeRestaurantId]
  );

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleAddToCart = (dish) => {
    setCart((current) => {
      const exist = current.find((item) => item.id === dish.id);
      if (exist) {
        return current.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { ...dish, quantity: 1 }];
    });
  };

  const handleQuantityChange = (dishId, delta) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === dishId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = (dishId) => {
    setCart((current) => current.filter((item) => item.id !== dishId));
  };

  const handleConfirmOrder = () => {
    if (!customer.name.trim() || !customer.phone.trim() || !customer.address.trim()) {
      alert('请填写联系人信息以继续。');
      return;
    }
    if (!cart.length) {
      alert('购物车为空，请先添加菜品。');
      return;
    }
    setStage('confirm');
  };

  const handlePay = () => {
    setPaymentStatus('processing');
    setTimeout(() => {
      setPaymentStatus('success');
    }, 1000);
  };

  const handleReset = () => {
    setCart([]);
    setCustomer(initialCustomer);
    setStage('menu');
    setPaymentStatus('idle');
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <h1>在线订餐系统</h1>
          <p>餐厅浏览 · 菜品展示 · 购物车 · 订单确认 · 支付</p>
        </div>
      </header>

      <main className="page-grid">
        <section className="panel restaurants-panel">
          <h2>餐厅浏览</h2>
          <div className="restaurants-list">
            {restaurants.map((rest) => (
              <button
                key={rest.id}
                className={rest.id === activeRestaurantId ? 'restaurant-card active' : 'restaurant-card'}
                onClick={() => {
                  setActiveRestaurantId(rest.id);
                  setStage('menu');
                }}
              >
                <strong>{rest.name}</strong>
                <span>{rest.category}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="panel menu-panel">
          <div className="panel-header">
            <div>
              <h2>{activeRestaurant.name}</h2>
              <p>{activeRestaurant.description}</p>
            </div>
            <div className="restaurant-meta">
              <span>{activeRestaurant.opening}</span>
              <span>{activeRestaurant.delivery}</span>
            </div>
          </div>

          <div className="dishes-grid">
            {activeRestaurant.menu.map((dish) => (
              <article key={dish.id} className="dish-card">
                <div className="dish-media">
                  <img
                    src={`${publicPath}images/${dish.id}.jpg`}
                    alt={dish.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `${publicPath}images/placeholder.svg`;
                    }}
                  />
                </div>
                <div>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </div>
                <div className="dish-footer">
                  <span className="price">¥{dish.price.toFixed(2)}</span>
                  <button onClick={() => handleAddToCart(dish)}>加入购物车</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="panel cart-panel">
          <h2>购物车</h2>
          <div className="cart-list">
            {cart.length ? (
              cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div>
                    <strong>{item.name}</strong>
                    <p>单价 ¥{item.price.toFixed(2)}</p>
                  </div>
                  <div className="cart-controls">
                    <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                    <button className="remove" onClick={() => handleRemove(item.id)}>移除</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="empty-state">购物车空空如也，快去选购喜欢的菜品吧。</p>
            )}
          </div>

          <div className="summary-card">
            <p>总计：<strong>¥{cartTotal.toFixed(2)}</strong></p>
            <button onClick={handleConfirmOrder} disabled={!cart.length}>确认订单</button>
            <button className="secondary" onClick={handleReset}>清空订单</button>
          </div>
        </aside>
      </main>

      <section className="panel checkout-panel">
        <h2>订单确认</h2>
        <div className="checkout-grid">
          <div className="checkout-form">
            <label>
              姓名
              <input
                value={customer.name}
                onChange={(event) => setCustomer({ ...customer, name: event.target.value })}
                placeholder="联系人"
              />
            </label>
            <label>
              电话
              <input
                value={customer.phone}
                onChange={(event) => setCustomer({ ...customer, phone: event.target.value })}
                placeholder="手机号"
              />
            </label>
            <label>
              地址
              <input
                value={customer.address}
                onChange={(event) => setCustomer({ ...customer, address: event.target.value })}
                placeholder="送餐地址"
              />
            </label>
          </div>

          <div className="checkout-info">
            <div className="info-card">
              <h3>当前订单</h3>
              <ol>
                {cart.map((item) => (
                  <li key={item.id}>
                    {item.name} × {item.quantity} = ¥{(item.price * item.quantity).toFixed(2)}
                  </li>
                ))}
              </ol>
              <p className="order-total">订单总额：¥{cartTotal.toFixed(2)}</p>
            </div>
            <button
              className="pay-button"
              onClick={handlePay}
              disabled={stage !== 'confirm' || paymentStatus === 'processing' || !cart.length}
            >
                {paymentStatus === 'processing' ? '支付中...' : '支付'}
              </button>
            {paymentStatus === 'success' && (
              <div className="success-box">
                支付成功！感谢下单，{customer.name}。
              </div>
            )}
            <button className="secondary" onClick={handleReset}>重新开始</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
