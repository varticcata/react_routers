# react_routers - FullStack Development KEA

Routing library - react-router-dom v6

- responsible for rendering the view

### Highlights

- <Routes></Routes> instead of Switch
- element instead of component
- useParams(), useMatch(), useLocation(), useNavigate()
- <Route path="/products/" element={<Products products={products} />} /> - passing props
- query-string: queryString.parse()
- <Route path='/messages' element={<Navigate to="/posts" />} /> - redirecting
- <button onClick={() => navigate('/products', {replace:true})}>Save</button> - replace history
- <Route path='admin' element={<Dashboard />}>
  <Route path='users' element={<Users />} />
  <Route path='posts' element={<AdminPosts />} />
  <Route path='\*' element={<NotFound />} />
  </Route> - nested routing
- <Outlet /> - renders the matching child route with its respective component
